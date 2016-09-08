# coding=utf-8
from annoying.functions import get_object_or_None
from django.contrib.auth import authenticate, login, logout
from django.core.urlresolvers import reverse
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView
from core.models import User
from landing.models import Setup
from django.views.decorators.clickjacking import xframe_options_exempt

__author__ = 'alexy'


class LandingView(TemplateView):
    template_name = 'landing/index.html'

    def get_context_data(self, **kwargs):
        context = super(LandingView, self).get_context_data()
        setup = Setup.objects.first()
        context.update({
            'SETUP': setup
        })
        return context


@csrf_exempt
@xframe_options_exempt
def landing_sign(request):
    context = {}
    error = None
    # if request.user.is_authenticated():
    #     return HttpResponseRedirect(reverse('administrator:list'))
    # else:
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        usercheck = get_object_or_None(User, username=username, type=4)
        if usercheck:
            user = authenticate(username=username, password=password)
            if user is not None:
                if user.is_active:
                    login(request, user)
                    return HttpResponseRedirect(request.META['HTTP_REFERER'])
    return HttpResponseRedirect(reverse('landing:index'))


def landing_logout(request):
    if request.user.is_authenticated():
        logout(request)
    return HttpResponseRedirect(reverse('landing:index'))


def get_robots_txt(request):
    """
    Функция отображения robots.txt
    """
    setup = Setup.objects.first()
    try:
        content = setup.robots_txt
    except:
        content = u'User-agent: *'
    return HttpResponse(content, content_type='text/plain')


def get_sitemap_xml(request):
    """
    Функция отображения sitemap.xml
    """
    setup = Setup.objects.first()
    try:
        content = setup.sitemap
    except:
        content = u'User-agent: *'
    return HttpResponse(content, content_type='text/xml')

